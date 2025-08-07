
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  devicePixelRatio: 2
};

new Chart(document.getElementById('seriesCriticas'), {
  type: 'line',
  data: {
    labels: meses,
    datasets: [{
      label: 'Crítico',
      data: [30, 45, 35, 50, 60, 40, 55, 50, 48, 60, 55, 45],
      borderColor: 'red',
      backgroundColor: 'transparent',
      tension: 0.3
    }]
  },
  options: chartOptions
});

new Chart(document.getElementById('rankingAreas'), {
  type: 'bar',
  data: {
    labels: ['área 01', 'área 02 com nome grande', 'área 03', 'área 04', 'área 05', 'área 06', 'área 07', 'área 08'],
    datasets: [{
      label: 'Ranking',
      data: [90, 85, 78, 70, 55, 45, 30, 20],
      backgroundColor: '#198cff'
    }]
  },
  options: { ...chartOptions, indexAxis: 'y' }
});

new Chart(document.getElementById('eficienciaDMC'), {
  type: 'line',
  data: {
    labels: meses,
    datasets: [
      {
        label: 'DMC 1',
        data: [70, 72, 65, 60, 75, 68, 73, 70, 78, 75, 80, 85],
        borderColor: 'blue',
        backgroundColor: 'transparent',
        tension: 0.4
      },
      {
        label: 'DMC 2',
        data: [40, 45, 42, 48, 50, 46, 52, 49, 53, 51, 55, 58],
        borderColor: 'orange',
        backgroundColor: 'transparent',
        tension: 0.4
      },
      {
        label: 'DMC 3',
        data: [60, 62, 58, 55, 59, 57, 60, 61, 63, 65, 68, 70],
        borderColor: 'purple',
        backgroundColor: 'transparent',
        tension: 0.4
      }
    ]
  },
  options: chartOptions
});

new Chart(document.getElementById('aguaNaoFaturada'), {
  type: 'bar',
  data: {
    labels: meses,
    datasets: [{
      label: 'Índice',
      data: [3.5, 4.2, 3.8, 4.5, 3.9, 3.6, 3.7, 4.1, 4.3, 3.2, 3.1, 3.8],
      backgroundColor: 'purple'
    }]
  },
  options: chartOptions
});

const efetividadeData = {
  datasets: [{
    label: 'Alta Efetividade',
    data: Array.from({ length: 20 }, () => ({
      x: Math.random() * 10,
      y: Math.random() * 10
    })),
    backgroundColor: 'blue'
  }, {
    label: 'Baixa Efetividade',
    data: Array.from({ length: 20 }, () => ({
      x: Math.random() * 10,
      y: Math.random() * 10
    })),
    backgroundColor: 'orange'
  }]
};

new Chart(document.getElementById('efetividade'), {
  type: 'scatter',
  data: efetividadeData,
  options: {
    ...chartOptions,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  }
});

const ctx = document.getElementById('operacao');
ctx.height = 400;
ctx.width = 400;

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['área com nome', 'área 2', 'área 3', 'área 4', 'área 5', 'área 6 nome'],
    datasets: [{
      data: [40, 22, 17, 10, 7, 4],
      backgroundColor: ['#198cff', '#99ccff', '#9b59b6', '#f39c12', '#e67e22', '#e74c3c']
    }]
  },
  options: chartOptions
});

const sosButton = document.getElementById('sos');
const sosAnimation = document.getElementById('sosAnimation');
const sequence = [4, 4, 8];
let timeoutId;

function animateSequence(seq) {
  let i = 0;
  function step() {
    if (i >= seq.length) {
      sosAnimation.classList.remove('active');
      return;
    }
    sosAnimation.classList.toggle('active', i % 2 === 0);
    timeoutId = setTimeout(step, seq[i] * 250);
    i++;
  }
  step();
}

if (sosButton && sosAnimation) {
  sosButton.addEventListener('click', () => {
    clearTimeout(timeoutId);
    animateSequence(sequence);
  });
}
