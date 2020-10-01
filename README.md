# browserslist-config
Nodecraft's browserslist configuration

## What is Browserslist?

Share browsers list between different front-end tools, like [stylelint](https://stylelint.io/), [postcss-preset-env](https://preset-env.cssdb.org/), and [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env).

- [Browserslist](https://github.com/ai/browserslist) (Github repo)
- [browserl.ist](http://browserl.ist) (Browserslist query syntax validation)
- ["Browserslist is a Good Idea"](https://css-tricks.com/browserlist-good-idea/) (blog post by [@chriscoyier](https://github.com/chriscoyier))

## Browser support

Nodecraft generally supports any browser with >0.5% usage on its primary domain, Nodecraft.com, as well as the last 3 versions of every major browser. These stats can be found in the `browserslist-stats.json`. There are a few exceptions:

- IE is never supported
- Firefox ESR is always supported

## Usage

### browserslist
```
> 0.5% in @nodecraft/browserslist-config stats
extends @nodecraft/browserslist-config
```

### package.json

```json
{
  "browserslist": [
  	"> 0.5% in @nodecraft/browserslist-config stats",
  	"extends @nodecraft/browserslist-config"
  ]
}
```
