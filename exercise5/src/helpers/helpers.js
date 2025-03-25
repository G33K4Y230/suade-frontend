export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}

  groupByKey(array, key) {

    let values = {}

    array.forEach(item => {
      if(Object.keys(values).includes(item[key])) {
        values[item[key]]++
      } else {
        values[item[key]] = 1
      }
    })

    Object.keys(values).forEach(key => {
      values[key] = values[key] / array.length
    })

    return values

  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue='none') {
    const subpaths = path.split('.')
    let value = obj
    subpaths.forEach(item => {
      if(value[item] != null) value = value[item]
      else {
        value = defaultValue 
      }
    })
    
    return value
    // TODO: implement logic here
  },
};
