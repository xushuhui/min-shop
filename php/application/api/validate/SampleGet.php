<?php
/**
 * Created by 七月
 * User: 七月
 * Date: 2017/2/14
 * Time: 10:46
 */

namespace app\api\validate;

/**
 * Class BannerGet
 * 对获取Banner的接口做验证
 */
class SampleGet extends BaseValidate
{
    protected $rule = [
        'key' => 'number'
    ];

    protected $message = [
//        'location' => 'location 输入'
    ];
}