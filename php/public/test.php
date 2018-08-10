<?php
//$a = -1;
//echo 'empty'.empty($a).'<br>';
//echo 'isset'.(isset($a));


//$yCode = array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J');
//$orderSn = $yCode[intval(date('Y')) - 2017] . strtoupper(dechex(date('m'))) . date(
//        'd') . substr(time(), -5) . substr(microtime(), 2, 5) . sprintf(
//        '%02d', rand(0, 99));
//echo $orderSn;
//echo sprintf('%03d', rand(0,999));
   $redis = new Redis();
   $redis->connect('127.0.0.1',6379);
   $redis->set('string','hello redis');
   echo $redis->get('string');
