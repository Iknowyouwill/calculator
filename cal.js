var cal = new Vue({
    el: '#cal',
    data: {
        formula: '0',               //显示在输入框的字符串
        result: ''                 //传给eval计算的字符串
    },
    methods: {
        addNum: function (val) {   //输入数字
            if(this.formula == '0') {
                this.formula = '';
            }
            this.formula += val;
            this.result = this.formula;
        },
        addOperator: function (op) {   //输入运算符
            if(this.formula == '0') {
                this.formula = '';
            }
            this.formula += op;
            this.result = this.formula;
        },
        clear: function () {         //归零
            this.formula = '0';
            this.result = this.formula;
        },
        remove: function () {          //删除一个输入
            this.formula = this.formula+'';
            var last = this.formula.length;
            last==1 ?this.formula='0':this.formula = this.formula.split('').slice(0, last-1).join('');
            this.result = this.formula;
        },
        calculate: function () {      //计算
            
            try{
                this.formula = eval(this.result)
            }
            catch(e) {
                this.formula = 'INPUT ERROR';
            };
        },
        sqrtNum: function () {            //开根号
            this.formula = this.result;
            this.result = 'Math.sqrt('+this.formula+')'; 
            this.formula = 'sqrt('+this.formula+')';
        }
    }
});