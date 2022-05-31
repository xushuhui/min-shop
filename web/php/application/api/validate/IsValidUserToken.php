<?php
/**
 * Created by xushuhui.
 * Author: xushuhui
 * 微信公号：互联网工程师
 * 知乎ID: 徐曙辉
 * Date: 2017/2/23
 * Time: 21:56
 */

namespace app\api\validate;


class IsValidUserToken extends BaseValidate
{
    protected $rule = [
        'token' => 'isValidUserToken'
    ];
}