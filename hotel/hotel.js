let priceList = [
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },
    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },
    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },
    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
];


function priceListFormatter(priceList) {    
    if(!arguments.length) throw new Error;
    
    let group = priceList.reduce((acc, value) => {
        
        if(!acc[value.price]){
            acc[value.price]=[];
        }
        acc[value.price].push({from: value.from, to: value.to});
        // console.log(acc);
        return acc;

        // const dateObj = ({ from, to } = item);
        // console.log(dateObj);
        // const r = map.get(item.price);
        // return map.set(item.price, r ? [...r, dateObj] : [dateObj]);
      }, {});

    let formattedList = [];

    Object.keys(group)
      .sort()
      .map((price) => {
          formattedList.push(
              Number(price).toFixed(1) + ' : ' +
              group[price].map((x) => x.from + ' to ' + x.to).join(', ')
              
          )
      })
      console.log(formattedList);
}


module.exports = priceListFormatter;


