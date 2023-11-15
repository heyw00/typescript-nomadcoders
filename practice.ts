type Words = {
    [key:string]: string 
}
//Words 타입이 string만을 property로 가지는 오브젝트다. 
//제한된 양의 property 혹은 key를 가지는 타입을 정의해주는 방법
//property에 대해서 미리 알진 못하지만 타입만 알고 있을 때 씀

// let dict :Words = {
//     "potato": "food", // key value 모두 string
// }

//words를 initializer 없이 선언해주고, constructor에서 수동으로 초기화
class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word:Word) { // 클래스를 타입처럼 쓸 수 있다
        // 해당 단어가 사전에 존재하지 않는 경우에만 추가
        if(this.words[word.term] === undefined) {
            //key-value
            this.words[word.term] = word.def
        } 
    }
    def(term:string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public term:string,
        public def :string
    ) {}
}

const kimchi = new Word("kimchi", "한국의 소울");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi")