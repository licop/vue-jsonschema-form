export default {
  name: 'Objects',
  schema: {
    description: 'A simple form example.',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      firstName: {
        title: 'firstName',
        type: 'string',
      },
      lastName: {
        title: 'lastName',
        type: 'string',
      },
      telephone: {
        title: 'telephone',
        type: 'string',
        minLength: 10,
      },
      city: {
        title: '城市',
        type: 'array',
        items: {
          type: 'string',
          enum: ['北京', '上海', '杭州'],
        },
      }
    }
  },
  uiSchema: {

  },
  default: {
    firstName: 'licop',
    lastName: 'nuoke',
    telephone: '13455555555',
    city: ''
  },
}
