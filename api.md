<a name="Typis"></a>

## Typis : <code>Object</code>
**Kind**: global constant  

* [Typis](#Typis) : <code>Object</code>
    * [.get(object)](#Typis.get) ⇒ <code>string</code>
    * [.is(object, type)](#Typis.is) ⇒ <code>boolean</code>
    * [.throw(object, type, [msg])](#Typis.throw) ⇒ <code>boolean</code>

<a name="Typis.get"></a>

### Typis.get(object) ⇒ <code>string</code>
Get object type

**Kind**: static method of [<code>Typis</code>](#Typis)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>object</td><td><code>Object</code></td><td><p>object</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
typis.get('hello'); //=> String
```
<a name="Typis.is"></a>

### Typis.is(object, type) ⇒ <code>boolean</code>
Check object type

**Kind**: static method of [<code>Typis</code>](#Typis)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>object</td><td><code>Object</code></td><td><p>object</p>
</td>
    </tr><tr>
    <td>type</td><td><code>string</code></td><td><p>type string can be also lowercase</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
typis.is('hello', 'number'); //=> false
```
<a name="Typis.throw"></a>

### Typis.throw(object, type, [msg]) ⇒ <code>boolean</code>
Check object type and throw an error if not satisfied

**Kind**: static method of [<code>Typis</code>](#Typis)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>object</td><td><code>Object</code></td><td><p>object</p>
</td>
    </tr><tr>
    <td>type</td><td><code>string</code></td><td><p>type string can be also lowercase</p>
</td>
    </tr><tr>
    <td>[msg]</td><td><code>string</code></td><td><p>message error</p>
</td>
    </tr>  </tbody>
</table>

**Example**  
```js
try {     typis.throw('hello', 'number');} catch(e) {     console.log(e);}
```
