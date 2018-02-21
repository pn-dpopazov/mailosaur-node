/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a Message.
 */
class Message {
  /**
   * Create a Message.
   * @member {uuid} [id]
   * @member {string} [server]
   * @member {array} [rcpt]
   * @member {array} [from]
   * @member {array} [to]
   * @member {array} [cc]
   * @member {array} [bcc]
   * @member {date} [received]
   * @member {string} [subject]
   * @member {object} [html]
   * @member {array} [html.links]
   * @member {array} [html.images]
   * @member {string} [html.body]
   * @member {object} [text]
   * @member {array} [text.links]
   * @member {array} [text.images]
   * @member {string} [text.body]
   * @member {array} [attachments]
   * @member {object} [metadata]
   * @member {array} [metadata.headers]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Message
   *
   * @returns {object} metadata of Message
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Message',
      type: {
        name: 'Composite',
        className: 'Message',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          server: {
            required: false,
            serializedName: 'server',
            type: {
              name: 'String'
            }
          },
          rcpt: {
            required: false,
            serializedName: 'rcpt',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MessageAddressElementType',
                  type: {
                    name: 'Composite',
                    className: 'MessageAddress'
                  }
              }
            }
          },
          from: {
            required: false,
            serializedName: 'from',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MessageAddressElementType',
                  type: {
                    name: 'Composite',
                    className: 'MessageAddress'
                  }
              }
            }
          },
          to: {
            required: false,
            serializedName: 'to',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MessageAddressElementType',
                  type: {
                    name: 'Composite',
                    className: 'MessageAddress'
                  }
              }
            }
          },
          cc: {
            required: false,
            serializedName: 'cc',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MessageAddressElementType',
                  type: {
                    name: 'Composite',
                    className: 'MessageAddress'
                  }
              }
            }
          },
          bcc: {
            required: false,
            serializedName: 'bcc',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MessageAddressElementType',
                  type: {
                    name: 'Composite',
                    className: 'MessageAddress'
                  }
              }
            }
          },
          received: {
            required: false,
            serializedName: 'received',
            type: {
              name: 'DateTime'
            }
          },
          subject: {
            required: false,
            serializedName: 'subject',
            type: {
              name: 'String'
            }
          },
          html: {
            required: false,
            serializedName: 'html',
            type: {
              name: 'Composite',
              className: 'MessageContent'
            }
          },
          text: {
            required: false,
            serializedName: 'text',
            type: {
              name: 'Composite',
              className: 'MessageContent'
            }
          },
          attachments: {
            required: false,
            serializedName: 'attachments',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AttachmentElementType',
                  type: {
                    name: 'Composite',
                    className: 'Attachment'
                  }
              }
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Composite',
              className: 'Metadata'
            }
          }
        }
      }
    };
  }
}

module.exports = Message;