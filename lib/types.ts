import type { PropType, DefineComponent, ExtractPropTypes } from 'vue'

export enum SchemaTypes {
  'NUMBER' = 'number',
  'INTEGER' = 'integer',
  'STRING' = 'string',
  'OBJECT' = 'object',
  'ARRAY' = 'array',
  'BOOLEAN' = 'boolean'
}

type SchemaRef = { $ref: string }

export interface Schema {
  // 定义元素的类型
  type?: SchemaTypes | string
  const?: any
  format?: string
  // 为JSON Schema文件提供标题
  title?: string
  default?: any
  // 定义对象类型里的属性(键值对)，每个字段的值都是一个有效的schema片段，用来限制每个字段的格式
  properties?: {
    [key: string]: Schema
  }
  // 用来定义数组类型的子元素，值必须为数组，且是一个有效的schema片段
  items?: Schema | Schema[] | SchemaRef
  uniqueItems?: any
  // 用于定义属性之间的依赖关系。它指定了当一个属性存在时，另一个属性是否必须存在或必须满足什么条件
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef
  }
  // 相当于XOR布尔算符，必须满足其中一个子schema校验
  oneOf?: Schema[]
  // 相当于OR布尔算符，必须满足任意子schema校验
  anyOf?: Schema[]
  //  相当于AND布尔算符，必须满足所有的子schema校验
  allOf?: Schema[]
  // 定义对象类型properties所声明的字段是否必须，值必须是数组，数组中的元素必须是字符串类型且唯一
  required?: string[]
  enum?: any[]
  enumNames?: any[]
  enumKeyValue?: any[]
  additionalProperties?: any
  additionalItems?: Schema
  // 字符串类型数据的最小长度
  minLength?: number
  // 字符串类型数据的最大长度
  maxLength?: number
  // 约束取值范围，标识取值范围应该大于或等于minimum

  minimun?: number
  // 约束取值范围，标识取值范围应该小于或等于maximum
  maximum?: number
  multipleOf?: number
  // 假若maximum或exclusiveMaximum同时存在，且exclusiveMaximum为true，则取值范围小于maximum
  exclusiveMaximum?: number
  // 假若minimum或exclusiveMinimum同时存在，且exclusiveMinimum为true，则取值范围大于minimum
  exclusiveMinimum?: number
}


export const FiledPropsDefine = {
  schema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  value: {
    required: true,
  },
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true,
  },
  rootSchema: {
    type: Object as PropType<Schema>,
    required: true,
  }
} as const

export interface FiledProps {
  schema: Schema,
  uiSchema: any,
  value: any,
  onChange: (v: any) => void
}


export type CommonFiledType = DefineComponent<ExtractPropTypes<typeof FiledPropsDefine>>

export const CommonWidgetPropsDefine = {
  value: {},
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true,
  }
} as const

export const SelectionWidgetPropsDefine = {
  ...CommonWidgetPropsDefine,
  options: {
    type: Array as PropType<
      {
        key: string
        value: any
      }[]
    >,
    required: true,
  },
} as const

export type CommonWidgetDefine = DefineComponent<typeof CommonWidgetPropsDefine, {}, {}>

export type SelectionWidgetDefine = DefineComponent<typeof SelectionWidgetPropsDefine>

export interface Theme {
  widgets: {
    SelectionWidget: SelectionWidgetDefine,
    TextWidget: CommonWidgetDefine,
    NumberWidget: CommonWidgetDefine,
    [key: string]: any
  }
}

