# vue-jsonschema-form

## json-schema

### 什么是 json-schema

JSON Schema 是一种用于描述 JSON 数据结构的格式规范。它是一种基于 JSON 的元数据格式，可以用来定义 JSON 数据的类型、属性、格式和约束条件等信息。

JSON Schema 可以用来描述一个 JSON 对象的结构和属性，以及它们的数据类型、默认值、必需性、枚举值、正则表达式等信息。通过使用 JSON Schema，我们可以对 JSON 数据进行有效性检验，以确保数据的正确性和一致性。

JSON Schema 格式规范包括两部分：数据结构和数据校验规则。数据结构部分描述了 JSON 数据的结构和属性，数据校验规则部分描述了对 JSON 数据的检验规则和约束条件。

## API 设计

```jsx
<JsonSchema
  schema={schema}
  value={value}
  locale={locale}
  onChange={onChange}
  contextRef={someRef}
  uiSchema={uiSchema}
/>
```

### schema

json schema 对象，用来定义数据，同时也是我们定义表单的依据

### value

表单的数据结果，你可以从外部改变这个 value，在表单被编辑的时候，会通过`onChange`透出 value

需要注意的是，因为 Vue 使用的是可变数据，如果每次数据变化我们都去改变`value`的对象地址，那么会导致整个表单都需要重新渲染，这会导致性能降低。
从实践中来看，我们传入的对象，在内部修改其 field 的值基本不会有什么副作用，所以我们会使用这种方式来进行实现。也就是说，如果`value`是一个对象，
那么从`JsonSchemaForm`内部修改的值，并不会改变`value`对象本身。我们仍然会触发`onChange`，因为可能在表单变化之后，使用者需要进行一些操作。

### onChange

在表单值有任何变化的时候会触发该回调方法，并把新的值进行返回

### locale

语言，使用`ajv-i18n`指定错误信息使用的语言

### contextRef

你需要传入一个 vue3 的`Ref`对象，我们会在这个对象上挂载`doValidate`方法，你可以通过

```ts
const yourRef = ref({})

onMounted(() => {
  yourRef.value.doValidate()
})

<JsonSchemaForm contextRef={yourRef} />
```

这样来主动让表单进行校验。

### uiSchema

对表单的展现进行一些定制，其类型如下：

```ts
export interface VueJsonSchemaConfig {
  title?: string;
  descrription?: string;
  component?: string;
  additionProps?: {
    [key: string]: any;
  };
  withFormItem?: boolean;
  widget?: "checkbox" | "textarea" | "select" | "radio" | "range" | string;
  items?: UISchema | UISchema[];
}
export interface UISchema extends VueJsonSchemaConfig {
  properties?: {
    [property: string]: UISchema;
  };
}
```
