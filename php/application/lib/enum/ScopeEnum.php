<?php
/**
 * Created by 七月.
 * Author: 七月
 * 微信公号：小楼昨夜又秋风
 * 知乎ID: 七月在夏天
 * Date: 2017/2/23
 * Time: 22:04
 */

namespace app\lib\enum;

/**
 * 接口访问权限枚举
 * 这种权限涉及是逐级式
 * 简单，但不够灵活
 * 最完整的权限控制方式是作用域列表式权限
 * 给每个令牌划分到一个SCOPE作用域，每个作用域
 * 可访问多个接口
 */
class ScopeEnum
{
    const User = 16;
    
    
    // 管理员是给CMS准备的权限
    const Super = 32;
}