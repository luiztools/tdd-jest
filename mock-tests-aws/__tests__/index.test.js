//__tests__/index.test.js
const queue = require('../libs/queueService');

const AWS = require('aws-sdk-mock');
AWS.setSDK('../node_modules/aws-sdk');

test('sendMessage', async () => {
    AWS.mock('SQS', 'sendMessage', (params, callback) => {
        return { MessageId: 1 };
    })

    const result = await queue.sendMessage({ message: 'text' });
    expect(result).toBeTruthy();

    AWS.restore('SQS', 'sendMessage');
})