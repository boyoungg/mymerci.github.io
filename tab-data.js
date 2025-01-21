document.addEventListener('DOMContentLoaded', function() {

const initialContent = {
    1: {
        image: './img/g1.gif',
        text: '학과 관련 분류와 학습 중 필기 한 내용을 카테고리 영역에서 한눈에 확인할 수 있어요'
    },
    2: {
        image: './img/g4.gif',
        text: ' 실제 시험과 유사한 문제 난이도와 다양한 유형의 문제들을 원하는 만큼 설정하여 풀어볼 수 있어요'
    },
    3: {
        image: './img/g7.gif',
        text: '  외우기 어렵고 막막한 의학용어로 구성 된 퀴즈를 풀며 더 쉽고 재미있게 용어 학습을 해보세요.'
    }
    };


const changeContent = {
    1: {
            image: './img/g2.gif',
            text: '이론 학습 중 상단 태그를 클릭하면 공부 중인 이론과 관련있는 문제를 바로 학습해볼 수 있어요'
        },
    2: {
        image: './img/g3.gif',
        text: '중요한 내용에 밑줄을 그어 표시하고, 추가적인 내용을 메모하고, 외우고 싶은 내용을 블랭크하여 학습하세요'
        },
    3: {
        image: './img/g5.gif',
        text: '답안률, 풀이시간 등의 통계를 제공합니다. AI가 제공하는 풀이한 문제의 해설을 함께 확인하며 학습하세요'
        },
    4: {
        image: './img/g6.gif',
        text: '풀이한 문제 중 어떤 문제를 틀렸는지 한눈에 확인하고 틀린 문제는 한번에 저장해서 복습할 수 있어요. '
        },
    5: {
        image: './img/g8.gif',
        text: '궁금한 키워드로 관련 문제나 이론을 검색할 수 있어요. 다른 친구들의 관심 키워드도 확인하세요'
        },
    6: {
        image: './img/g9.gif',
        text: '커뮤니티에서 SN/RN/해외/취업 등 궁금한 것을 질문하고, 알고 있는 지식을 나누며 성장하세요'
        }
};

const menus = document.querySelectorAll('.servbox');

    
menus.forEach(menu => {
    const buttons = menu.querySelectorAll('.sev01_menu, .sev02_menu, .sev03_menu, .sev04_menu, .sev05_menu, .sev06_menu, sev002_menu, sev001_menu, sev00_menu');

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const buttonIndex = parseInt(button.className.match(/\d+/)[0]);
        changeMenuContent(menu, buttonIndex);
        console.log('asd')
      });
    });

    const resetButton = menu.querySelector('.sev00_menu');
    resetButton.addEventListener('click', function() {
      const menuIndex = parseInt(menu.getAttribute('data-index'));
      resetMenuContent(menu, menuIndex);
    });
});

function changeMenuContent(menu, index) {
    const image = menu.querySelector('.contents_gif img');
    const text = menu.querySelector('.changedes');
    
    image.src = changeContent[index].image;
    text.textContent = changeContent[index].text;
}
function resetMenuContent(menu, index) {
    const image = menu.querySelector('.contents_gif img');
    const text = menu.querySelector('.changedes');

    image.src = initialContent[index].image;
    text.textContent = initialContent[index].text;
  }

});