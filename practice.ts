type Words = {
    [key: string]: string;
};

class Dict {
    private words: Words;

    constructor() {
        this.words = {};
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    def(term: string) {
        return this.words[term];
    }

    // 단어 업데이트 메소드
    update(term: string, newDef: string) {
        // 이미 단어가 존재하는 경우에는 정의를 업데이트
        if (this.words[term] !== undefined) {
            this.words[term] = newDef;
        } else {
            // 없다면 새로운 단어를 추가
            this.add(new Word(term, newDef));
        }
    }

    // 단어 삭제 메소드
    delete(term: string) {
        if (this.words[term]) {
            delete this.words[term];
        }
    }

    print() {
        for (const term in this.words) {
            console.log(`${term}: ${this.words[term]}`);
        }
    }
}

class Word {
    constructor(
        public term: string,
        public def: string,
        public def2: string = ""
    ) {}

    addDef(newDef: string) {
        this.def2 = newDef;
    }

     print() {
        console.log(`${this.term}: ${this.def}, ${this.def2}`);
    }
}

const kimchi = new Word("kimchi", "한국의 소울");
const dict = new Dict();
dict.add(kimchi);
//dict.def("kimchi");
dict.update("kimchi", "새로운 정의");
kimchi.addDef("추가된 정의")
kimchi.print();