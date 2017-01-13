
import Mock from 'mockjs'

let Random = Mock.Random;
Random.cname();
Random.dataImage('200x100');
Random.cparagraph();
Random.ctitle();
Random.date();


/**
 * 首页数据
 */

Mock.mock(
        '/index/indexList',
        {
            'data': {
                'code': 1000,
                'msg': 'success',
                'data|10': [
                    {
                        'articleId|+1': 1,
                        'title': '@ctitle',
                        'logo': '@dataImage("100x100")',
                        'introduction': '@cparagraph(2)',
                        'content': {
                            'title': '@ctitle',
                            'name': '@cname',
                            'date': '@date',
                            'pic': '@dataImage("200x100")',
                            'content': '@cparagraph'
                        }
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
                        'pic': '@dataImage("200x100")',
                        'url': '/index'
                    }
                ]
            }
        }
    )
/**
 * 用户中心数据
 */
    .mock(
        '/center/getInfo',
        {
            'data': {
                'code': 1000,
                'msg': 'success',
                'data': {
                    'name': '边城',
                    'pic': '/dist/3.jpeg'
                }
            }
        }
    )
/**
 * 文章数据
 */
    .mock(
        '/article/getArticle',
        {
            'data': {
                'code': 1000,
                'msg': 'success',
                'data|5': [
                    {
                        'articleId|+1': 1,
                        'title': '@ctitle',
                        'logo': '@dataImage("100x100")',
                        'introduction': '@cparagraph(2)',
                        'content': {
                            'title': '@ctitle',
                            'name': '@cname',
                            'date': '@date',
                            'pic': '@dataImage("200x100")',
                            'content': '@cparagraph'
                        }
                    }
                ]
            }
        }
    )

    .mock(
        '/article/getContent',
        {
            'data': {
                'code': 1000,
                'msg': 'success',
                'data': {
                    'articleId': '',
                    'title': '@ctitle',
                    'name': '@cname',
                    'date': '@date',
                    'pic': '@dataImage("200x100")',
                    'content': '@cparagraph'
                }
            }
        }
    )