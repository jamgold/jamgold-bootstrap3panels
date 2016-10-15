// Write your package code here!
Bootstrap3Panel = function() {
  var members = ['name', 'title', 'body'];
  if(arguments.length>0) 
  {
    for(var i=0;i<arguments.length;i++)
      if(typeof arguments[i] == 'string')
      {
        if(i<=members.length)
          this[members[i]] = arguments[i];
        else
          console.log('Bootstrap3Panel: we do not no where to put this', arguments[1]);
      }
      else
      {
        // console.log('need to parse', arguments[i]);
        for(var n in arguments[i])
        {
          if(n in this) this[n] = arguments[i][n];
          else console.log('Bootstrap3Panel: unknown member', n);
        }
      }
  }
}
Bootstrap3Panel.prototype = {
  name: '',
  title: '',
  body: '',
  expanded: false,
  template: false,
  mobileUrl: ''
};
