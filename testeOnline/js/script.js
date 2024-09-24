function cadastroAluno() {
    let rm = document.getElementById('rm');
    let nome = document.getElementById('nome');
    let cpf = document.getElementById('cpf');
    let rg = document.getElementById('rg');

    if (rm.value !== '' && nome.value !== '' && cpf.value !== '' && rg.value !== '') {
        alert('Aluno cadastrado com sucesso!');
    
        let formCadastro = document.querySelector('.form_cadastro');
        formCadastro.style.display = 'none'

        let formQuestoes = document.querySelector('.form_questoes');
        formQuestoes.style.display = 'flex';
    } else {
        alert('Erro! Insira todas as informações!');
    }
}

function calcularMedia() {
    let q1 = document.getElementById('q1').value;
    let q2 = document.getElementById('q2').value;
    let q3 = document.getElementById('q3').value;
    let q4 = document.getElementById('q4').value;
    let q5 = document.getElementById('q5').value;
    const q6 = document.querySelector('input[name="respostasq6"]:checked')?.value;
    const q7 = document.querySelector('input[name="respostasq7"]:checked')?.value;
    
    // Texto para exibir nas respostas
    const q6Text = document.querySelector('input[name="respostasq6"]:checked')?.nextSibling.textContent.trim();
    const q7Text = document.querySelector('input[name="respostasq7"]:checked')?.nextSibling.textContent.trim();

    const q8 = [];
    const q8Text = [];
    if (document.getElementById('resp8.1').checked) {
        q8.push(document.getElementById('resp8.1').value);
        q8Text.push('5 + 5');
    }
    if (document.getElementById('resp8.2').checked) {
        q8.push(document.getElementById('resp8.2').value);
        q8Text.push('10 x 1');
    }
    if (document.getElementById('resp8.3').checked) {
        q8.push(document.getElementById('resp8.3').value);
        q8Text.push('5 x 5');
    }

    const q9 = [];
    const q9Text = [];
    if (document.getElementById('resp9.1').checked) {
        q9.push(document.getElementById('resp9.1').value);
        q9Text.push('5 / 5');
    }
    if (document.getElementById('resp9.2').checked) {
        q9.push(document.getElementById('resp9.2').value);
        q9Text.push('1 x 1');
    }
    if (document.getElementById('resp9.3').checked) {
        q9.push(document.getElementById('resp9.3').value);
        q9Text.push('5 + 1');
    }
    
    const q10 = document.getElementById('questao10').value;
    const q10Text = document.querySelector(`#questao10 option[value="${q10}"]`)?.textContent;

    // Validação das respostas
    if (q1 === '' || q2 === '' || q3 === '' || q4 === '' || q5 === '' || q6 == null || q7 == null || q8.length === 0 || q9.length === 0 || q10 === '') {
        alert('Erro! Responda todas as questões!');
        return;
    }

    let n1 = 0;
    if (q1.toLowerCase() === 'isaac newton') {
        n1 = 1;
    }

    let n2 = 0;
    if (parseInt(q2) === 250) {
        n2 = 1;
    }

    let n3 = 0;
    if (q3.toLowerCase() === 'albert einstein') {
        n3 = 1;
    }

    let n4 = 0;
    if (parseInt(q4) === 1) {
        n4 = 1;
    }

    let n5 = 0;
    if (parseInt(q5) === 2) {
        n5 = 1;
    }

    let n6 = 0;
    if (q6 === '1') {
        n6 = 1;
    }

    let n7 = 0;
    if (q7 === '2') {
        n7 = 1;
    }

    let n8 = 0;
    if (q8.includes('0') && q8.includes('1') && !q8.includes('2')) {
        n8 = 1;
    }

    let n9 = 0;
    if (q9.includes('2') && !q9.includes('1') && !q9.includes('0')) {
        n9 = 1;
    }

    let n10 = 0;
    if (q10 === 'resp10.3') {
        n10 = 1;
    }

    // Cálculo da média
    let media = (((n1 * 30) + (n2 * 30) + (n3 * 30) + 
                 (n4 * 40) + (n5 * 40) + (n6 * 40) + 
                 (n7 * 50) + (n8 * 50) + (n9 * 20) + 
                 (n10 * 20)) / 350) * 10;

    const respostas = `
        <strong>Respostas:</strong><br>
        1: ${q1}<br>
        2: ${q2}<br>
        3: ${q3}<br>
        4: ${q4}<br>
        5: ${q5}<br>
        6: ${q6Text}<br>
        7: ${q7Text}<br>
        8: ${q8Text.join(', ')}<br>
        9: ${q9Text.join(', ')}<br>
        10: ${q10Text}<br>
    `;
         
    document.getElementById('respostas').innerHTML = respostas;
             
    if (media >= 6) {
        document.getElementById('situacao').innerHTML = 'Sua média é:  '+ media.toFixed(2) + '<br>Aluno aprovado!';
    } else if (media >= 2) {
        document.getElementById('situacao').innerHTML = 'Sua média é:  '+ media.toFixed(2) + '<br>Aluno terá direito ao exame!';
    } else {
        document.getElementById('situacao').innerHTML = 'Sua média é:  '+ media.toFixed(2) + '<br>Aluno reprovado!';
    }
             
    document.getElementById('relatorio').style.display = 'block';
         
    document.querySelectorAll('input, select').forEach(input => input.disabled = true);
}