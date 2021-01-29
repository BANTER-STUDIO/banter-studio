var options =
{
  scriptUrl: '//visualdewsstudio.disqus.com/embed.js',

  laziness: 1,

  throttle: 250,

  disqusConfig: function() {
    this.page.title = 'APPLICATIONS';
    this.page.url = 'http://url.to/your-website';
    this.page.identifier = 'unique-identifier';
    this.callbacks.onReady = [function() {
      var el = document.querySelector('.disqus-placeholder');
      if (el.classList)
        el.classList.add('is-hidden'); // IE 10+
      else
        el.className += ' ' + 'is-hidden'; // IE 8-9
    }];
  }
};

// vanilla
disqusLoader('.disqus', options);