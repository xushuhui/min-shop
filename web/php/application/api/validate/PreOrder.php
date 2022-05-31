<?php
/**
 * Created by xushuhui.
 * Author: xushuhui
 * 微信公号：互联网工程师
 * 知乎ID: 徐曙辉
 * Date: 2017/2/26
 * Time: 15:44
 */

namespace app\api\validate;


class PreOrder extends BaseValidate
{
    protected $rule = [
        'order_no' => 'require|length:16'
    ];
}