
import Mock from 'mockjs'

let Random = Mock.Random;
Random.cname();
Random.image('200x100');
Random.cparagraph();
Random.ctitle();


/*
    首页数据
*/
Mock.mock(
    '/index/getList',
    {
        'data': {
            'code': 1000,
            'msg': 'success',
            'data|10-11': [
                {
                    'title': '@ctitle',
                    'logo': '@image',
                    'detail': '@cparagraph',
                    'userID|+1': 1
                }
            ]
        }
    }
)
    // 首页轮播图
    .mock(
        '/index/getPic',
        {
            'data': {
                'code': 1000,
                'msg': 'success',
                'data|3-4': [
                    {
                        'title': '@ctitle',
                        'pic': '@image',
                        'url': '/index'
                    }
                ]
            }
        }
    )
/*
    用户中心数据
*/
    .mock(
        '/center/getInfo',
        {
            'data': {
                'code': 1000,
                'msg': 'success',
                'data': {
                    'name': '@cname',
                    'pic': '@image'
                }
            }
        }
    )