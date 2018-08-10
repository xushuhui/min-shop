<?php
/**
 * Created by xushuhui.
 * Author: xushuhui
 * 微信公号：互联网工程师
 * 知乎ID: 徐曙辉
 * Date: 2017/2/23
 * Time: 3:01
 */

namespace app\api\validate;


class AddressNew extends BaseValidate
{
    // 为防止欺骗重写user_id外键
    // rule中严禁使用user_id
    // 获取post参数时过滤掉user_id
    // 所有数据库和user关联的外键统一使用user_id，而不要使用uid
    protected $rule = [
        'name' => 'require|isNotEmpty',
        'mobile' => 'require|isMobile',
        'province' => 'require|isNotEmpty',
        'city' => 'require|isNotEmpty',
        'country' => 'require|isNotEmpty',
        'detail' => 'require|isNotEmpty',
    ];
}