# React Scrolling Effects

This is a React implementation that simulates 20 scrolling types. It's a simple, customizable, and easy-to-use package.

## Demo 

![Demo gif](https://github.com/felipe1234-dev/react-scrolling-effects/raw/main/demo.gif)

* Test in CodeSandbox - [Click here](https://8xje1.csb.app/)
* Inspired by ❤️ [Easing Functions Cheat Sheet](https://easings.net/)

## Getting Started

Use your favorite package manager to install **react-scrolling-effects**.

```bash
npm install react-scrolling-effects
# or
yarn add react-scrolling-effects
```
Import the ```scroll``` function and an effect that you like (in this example, we're gonna use ```smoothstep``` effect):
 
```javascript
import { scroll, smoothstep } from "react-scrolling-effects";
```
Link it to a component click event:

```javascript
<Example 
    onClick={() => scroll(".my-target", {
         container: "#my-container",
         duration: 1000,
         effect: smoothstep
    })}
/>
```

It will make the ```#my-container``` scroll to ```.my-target``` location using ```smoothstep``` effect and make this animation adapt to a timestamp of 1s (1000ms). 

* Note that **any CSS selector** can be used to address both container and target, not only classes or ids.

In case you want to scroll the whole user's view, not only a specific container, then you can omit container prop:

```javascript
<Example 
    onClick={() => scroll(".my-target", {
         // container: "#my-container",
         // now, container will be equivalent to document
         duration: 1000,
         effect: smoothstep
    })}
/>
```
Alternatively, you can also make it scroll some pixels instead of to a specific element:

* Scroll down ```500px```:

```javascript
<Example 
    onClick={() => scroll(500, /* replace the string with a number */{
         duration: 1000,
         effect: smoothstep
    })}
/>
```

* Scroll **up** ```500px```:

```javascript
<Example 
    onClick={() => scroll(-500, {
         duration: 1000,
         effect: smoothstep
    })}
/>
```

## API

### Required props
* ```target```: ```String``` or ```Number```. When a string, it's a CSS selector that points to a DOM element to which the page will be scrolled. When a number, it will scroll **n** pixels, as the provided number.

### All props
* ```container```: ```String```. The element that will be used to scroll. **Default**: If left empty, it will be equivalent to the whole user's view.
* ```duration```: ```Number```. The time in milliseconds that the scrolling animation will take to finish. **Default**: ```500```ms.
* ```effect```: ```func = (x: Number) => Number```. You need to import an animation effect from the library and input it in ```effect``` prop. You may also create custom scrolling effects if you want. **Default**: Smoothstep.
* ```yAxis```: ```Boolean```. Check if the container will be scrolled vertically/on the y-axis. **Default**: ```true```.
* ```xAxis```: ```Boolean```. Check if the container will be scrolled horizontally/on the x-axis. **Default**: ```false```.

### Effects
* **smoothstep**;
* **easeInBack**, **easeOutBack** and **easeInOutBack**;
* **easeInBounce**, **easeOutBounce** and **easeInOutBounce**;
* **easeInCirc**, **easeOutCirc** and **easeInOutCirc**;
* **easeInCubic**, **easeOutCubic** and **easeInOutCubic**;
* **easeInElastic**, **easeOutElastic** and **easeInOutElastic**;
* **easeInQuint**, **easeOutQuint** and **easeInOutQuint**;
* **easeInSine**, **easeOutSine** and **easeInOutSine**.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](./LICENSE.txt)