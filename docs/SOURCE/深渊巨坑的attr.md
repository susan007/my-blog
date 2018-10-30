## 问题描述
使用`<input type="radio"/>`时候，想通过点击li来改变元素的checked属性，却在点击几次（不确定）后checked不生效的情况。大概例子如下

html语句
```js
<ul id="list">
    <li>
    <input class="check-css" type="radio" value="male"/>
    </li>
    <li>
    <input class="check-css" type="radio" value="female"/>
    </li>
</ul>
````

css语句
```js
.check-css{
    background-image: url('no-selected.png')
}
.check-css:checked{
    background-image: url('selected.png')
}
```

js语句
```js
    $('#list li').on('click', function() {
      if($(this).find('input').val() == 'male'){
          $(this).find('input').attr('checked', 'checked')
      }else{
          $(this).find('input').removeAttr('checked')
      }
    })
```

## 原因分析
因为checked是input元素自带的属性，使用attr可能会返回undefined导致出错。

## 解决办法
使用prop来改变checked
```js
 $('#list li').on('click', function() {
      if($(this).find('input').val() == 'male'){
          $(this).find('input').prop('checked', true)
      }else{
          $(this).find('input').prop('checked', false)
      }
    })
```

## 总结
* 对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
* 对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。

###### 备注：这两句总结来自文章<a href="https://www.cnblogs.com/Showshare/p/different-between-attr-and-prop.html">prop和attr</a>

