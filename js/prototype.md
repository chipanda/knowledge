## js原型链及函数的两面性

### 一、js原型

#### 1、原型链的元素：构造函数、原型、实例。原型链有一下特性：

> 特性1：每个构造函数都有一个原型对象（prototype）。

> 特性2：原型对象都包含一个指向构造函数的指针（constructor）。

> 特性3：实例都包含一个指向原型对象的内部指针（[[Prototype]]）。

#### 2、所有引用类型都默认继承了Object，所有函数的默认原型都是Object的实例

> `Object.getPrototypeOf({}) === Object.prototype; //true`

> `Object.getPrototypeOf(Object.prototype) === null; // true`

### 二、函数的两面性：函数或对象

> `var Func = function(){}; //声明一个简单的方法`

> `var instance = new Func(); // 通过构造函数Func生成一个实例`

#### 1、当函数作为构造函数时

> 基于特性1、3，Func实例的[[Prototype]]指向Func.prototype：

>> `Object.getPrototypeOf(new Func()) === Func.prototype; //true`

> 由Func实例instance向上的原型链经过Func.prototype(由Object生成的实例)、Object.prototype、null

>> `Object.getPrototypeOf(instance) === Func.prototype; //true`

>> `Object.getPrototypeOf(Func.prototype) === Object.prototype; //true`

>> `Object.getPrototypeOf(Object.prototype) === null; //true`

#### 2、当函数作为对象时

> 函数作为对象看待时，它是由构造函数Function生成的一个实例。基于特性2、3：

>> `Object.getPrototypeOf(Func).constructor === Function; //true`

>> `Object.getPrototypeOf(Func) === Function.prototype; //true`

> 将Func看做Function实例向上的原型链经过Function.prototype、Object.prototype、null

>> `Object.getPrototypeOf(Func) === Function.prototype; //true`

>> `Object.getPrototypeOf(Function.prototype) === Object.prototype; //true`

>> `Object.getPrototypeOf(Object.prototype) === null; //true`

#### 对比函数作为构造函数和函数对象时，虽然原型链最终都经过Object.prototype，但中间路径并不一样（Func.prototype和Function.prototype）。