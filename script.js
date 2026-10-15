// HTML 요소 가져오기
const tCellBtn = document.getElementById('T_cell');
const bCellBtn = document.getElementById('B_cell');
const stCellBtn = document.getElementById('ST_cell');

// 버튼들 다음에 위치한 <p> 태그 요소 선택
const messageBox = document.querySelector('.garo + p');

// T세포 버튼 클릭 시
tCellBtn.addEventListener('click', () => {
    messageBox.textContent = '암세포를 발견하지 못하고 모든 세포를 공격한다.';
});

// B세포 버튼 클릭 시
bCellBtn.addEventListener('click', () => {
    messageBox.textContent = '암세포를 발견한 수는 있지만 죽이지는 못한다.';
});

// 슈퍼 T세포 버튼 클릭 시
stCellBtn.addEventListener('click', () => {
    messageBox.textContent = '암세포를 찾아서 죽인다!!!';
});
