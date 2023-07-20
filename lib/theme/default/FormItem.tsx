import { defineComponent } from 'vue';
import { CommonWidgetPropsDefine, type CommonWidgetDefine } from '../../types';
import { createUseStyles } from 'vue-jss';

const useStyles = createUseStyles({
  container: {

  },
  label: {
    display: 'block',
    color: '#777'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    margin: '5px 0',
    padding: 0,
    listStyle: 'none'
  }
})
const FormItem =  defineComponent({
  name: 'FormItem',
  props: CommonWidgetPropsDefine,
  setup(props, { slots }) {
    const classesRef = useStyles() 

    return () => {
      const { schema, errors } = props
      const classes = classesRef.value
      console.log(errors, 30, 'formitem')
      return <div class={classes.container}>
        <label class={classes.label}>{schema.title ? `${schema.title}: ` : ''}</label>
        { slots.default && slots.default() }
        <ul class={classes.errorText}>
          { errors?.map(err => <li>
            { err}
          </li>) }
        </ul>
      </div>
    }
  }
})

export default FormItem

// HOC: Higher Order Component: 高阶组件 
// 使用高阶组件可以抽离渲染部分的逻辑
export function withFormItem(Widget: any) {
  return defineComponent({
    name: `Wrapped${Widget.name}`,
    props: CommonWidgetPropsDefine,

    setup(props, { attrs }) {
      console.log(props, 54)
      return () => {
        return <FormItem {...props}>
          <Widget {...props} {...attrs} />
        </FormItem>
      }
    }
  }) as any
}