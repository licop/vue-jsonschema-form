export default {
  name: 'Test',
  schema: {
    description: 'A simple form example.',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      firstName: {
        title: 'firstName',
        type: 'string',
        default: 'Chuck',
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
      staticArray: {
        title: 'staticArray',
        type: 'array',
        items: [
          {
            type: 'string',
          },
          {
            type: 'number',
          },
        ],
      },
      singleTypeArray: {
        title: 'singleTypeArray',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            age: {
              type: 'number',
            },
          }
        }
      },
      multiSelectArray: {
        title: 'multiSelectArray',
        type: 'array',
        items: {
          type: 'string',
          enum: ['123', '456', '789'],
        },
      }
    }
  },
  uiSchema: {
    title: 'A registration form',
    properties: {
      firstName: {
        title: 'First name',
      },
      lastName: {
        title: 'Last name',
      },
      telephone: {
        title: 'Telephone',
      },
    },
  },
  default: {
    firstName: 'Chuck',
    lastName: 'Norris',
    telephone: '13455555555',
    staticArray: ['licop', 23],
    singleTypeArray: [{ name: 'jokcy', age: 12 }]
  },
}
