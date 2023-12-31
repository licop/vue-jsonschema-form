import { defineComponent, ref, reactive, watchEffect} from 'vue'
import { type Ref } from 'vue'
import MonatoEditor from './components/MonatoEditor'
import { createUseStyles } from 'vue-jss'
import SchemaForm, { type Schema, ThemeProvider } from '../lib'
import demos from './demos'
import themeDefault from '../lib/theme/default'
import customFormat from './plugins/customFormat'
import customKeyword from './plugins/customKeyword'

type UISchema = any

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string'
}

// css-in-js
const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '1200px',
    margin: '0 auto',
  },
  menu: {
    marginBottom: 20,
  },
  code: {
    width: 700,
    flexShrink: 0,
  },
  codePanel: {
    minHeight: 400,
    marginBottom: 20,
  },
  uiAndValue: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      width: '46%',
    },
  },
  content: {
    display: 'flex',
  },
  form: {
    padding: '0 20px',
    flexGrow: 1,
  },
  menuButton: {
    appearance: 'none',
    borderWidth: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'inline-block',
    padding: 15,
    borderRadius: 5,
    '&:hover': {
      background: '#efefef',
    },
  },
  menuSelected: {
    background: '#337ab7',
    color: '#fff',
    '&:hover': {
      background: '#337ab7',
    },
  },
})

export default defineComponent({
  name: 'App',
  setup() {
    const selectRef: Ref<number> = ref(0)

    const demo: {
      schema: Schema | null
      data: any
      uiSchema: UISchema | null
      schemaCode: string
      dataCode: string
      uiSchemaCode: string
      customValidate: ((d: any, e: any) => void) | undefined
    } = reactive({
      schema: null,
      data: {},
      uiSchema: {},
      schemaCode: '',
      dataCode: '',
      uiSchemaCode: '',
      customValidate: undefined,
    })

    watchEffect(() => {
      const index = selectRef.value
      const d: any = demos[index]
      
      demo.schema = d.schema
      demo.data = d.default
      demo.uiSchema = d.uiSchema
      demo.schemaCode = toJson(d.schema)
      demo.dataCode = toJson(d.default)
      demo.uiSchemaCode = toJson(d.uiSchema)
      demo.customValidate = d.customValidate
    })

    function handleChange(v: any) {
      demo.data = v
      demo.dataCode = toJson(v)
    }

    function handleCodeChange(
      file: 'uiSchema' | 'data' | 'schema',
      value: string
    ) {
      try {
        const json = JSON.parse(value)
        demo[file] = json
        ;(demo as any)[`${file}Code`] = value
      } catch(err) {}
    }

    const handleSchemaChange = (v: string) => handleCodeChange('schema', v)
    const handleDataChange = (v: string) => handleCodeChange('data', v)
    const handleUISchemaChange = (v: string) => handleCodeChange('uiSchema', v)

    const classesRef = useStyles()
    const contextRef = ref()
   
    // 表单校验
    function validateForm() {
      contextRef.value.doValidate().then((result: any) => {
        console.log('validate:', result)
      })
    }
    
    return () => {
      const classes = classesRef.value
      const select = selectRef.value
      
      return (
        <div class={classes.container}>
          <div class={classes.menu}>
            <h1>Vue3 JsonSchema Form</h1>
            <div>
              {
                demos.map((demo, index) => (
                  <button
                    class={{
                      [classes.menuButton]: true,
                      [classes.menuSelected]: index === select
                    }}
                    onClick={() => selectRef.value = index}
                  >
                    {demo.name}
                  </button>
                ))
              }
            </div>
          </div>
          <div class={classes.content}>
            <div class={classes.code}>
              <MonatoEditor 
                code={demo.schemaCode}
                class={classes.codePanel}
                onChange={handleSchemaChange}
                title='Schema'
              />
              <div class={classes.uiAndValue}>
                <MonatoEditor 
                  code={demo.uiSchemaCode}
                  class={classes.codePanel}
                  onChange={handleUISchemaChange}
                  title='UISchema'
                />
                <MonatoEditor 
                  code={demo.dataCode}
                  class={classes.codePanel}
                  onChange={handleDataChange}
                  title='Value'
                />
              </div>
            </div>
            <div class={classes.form}>
              <ThemeProvider theme={themeDefault as any}>
                <SchemaForm 
                  schema={demo.schema!}
                  uiSchema={demo.uiSchema || {}}
                  onChange={handleChange} 
                  value={demo.data}
                  contextRef={contextRef}
                  customFormat={customFormat}
                  customKeyword={customKeyword}
                  customValidate={demo.customValidate}
                />
              </ThemeProvider>
              <button onClick={validateForm}>校 验</button>
            </div>
          </div>
        </div>
      )
    }
  }
})