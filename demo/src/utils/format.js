import _ from 'lodash';
function number_format(format) {
    return (value)=>{
        if(!_.isNumber(value)) return '-';

        if(_.startsWith(format,'N')){
            return customFormat(value.toFixed(getDigit(format)));
        }

        if (_.startsWith(format,'P')) {
            return customFormat((value*100).toFixed(getDigit(format)).concat('%'))
        }
        return console.error('number_format函数参数错误');

        function customFormat(num) {
            let sNumParts = _.split(num,'.');
            sNumParts[0] = sNumParts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
            return sNumParts.join('.');
        }

        function getDigit(s) {
            return _.slice(s,1)[0];
        }
    }
}

export const N2 = number_format('N2');

//测试
// console.log(N2(1));
