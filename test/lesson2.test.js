const {requestPromise, requestCB} = require('../docs/.vuepress/utils/request')

test('异步cb检测', () => {
    function cb(data) {
        expect(data).toStrictEqual({'id': 1, 'title': 'how to add'})
        requestCB(cb, 'hello')
    }
})
