# Iconic.Js.AjaxContent

```javascript
    var callback1 = function(){
        $("<div/>").addClass("alert alert-success").html("1 ok").appendTo("#messages");
    };

    var remote1 = RemoteContentService('test1.html', '#dynamicDiv1', '0', '#messages', 'Cannot load test1', callback1);
    remote1.init();

    var callback2 = function(){
        $("<div/>").addClass("alert alert-success").html("2 ok").appendTo("#messages");
    };

    var remote2 = RemoteContentService('test2.html_', '#dynamicDiv2', 'asd', '#messages', 'Cannot load test2', callback2);
    remote2.init();
```
