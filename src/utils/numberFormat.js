      function getDisplayAmount(value, unit='currency'){

          // Determine amount + units to display for slider
          if(unit === 'currency'){
              return `$ ${Number(parseInt(value)).toLocaleString('en')}`
            }else{
                const displayUnit = value > 1 ? `${unit}s` : unit;
                return `${value} ${displayUnit}`;
            }
    }
    export default getDisplayAmount;