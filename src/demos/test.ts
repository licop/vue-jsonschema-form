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
    staticArray: ['licop', 23]
  },
}
