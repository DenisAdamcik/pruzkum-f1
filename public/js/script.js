document.addEventListener('DOMContentLoaded', function() {
    const genreData = {};
    const frequencyData = {};
    const table = document.getElementById('surveyTable');
    const rows = table.getElementsByTagName('tr');
    
    for (let i = 1; i < rows.length; i++) {
        const genreCell = rows[i].getElementsByTagName('td')[2];
        const genres = genreCell.textContent.trim().split(',');
        genres.forEach(genre => {
            genreData[genre] = (genreData[genre] || 0) + 1;
        });
    }
    
    for (let i = 1; i < rows.length; i++) {
        const frequencyCell = rows[i].getElementsByTagName('td')[3];
        const frequencies = frequencyCell.textContent.trim().split(',');
        frequencies.forEach(frequency => {
            frequencyData[frequency] = (frequencyData[frequency] || 0) + 1;
        });
    }
    
    const genreLabels = Object.keys(genreData);
    const genreCounts = Object.values(genreData);
    const frequencyLabels = Object.keys(frequencyData);
    const frequencyCounts = Object.values(frequencyData);

    const genreCtx = document.getElementById('genreChart').getContext('2d');
    new Chart(genreCtx, {
        type: 'bar',
        data: {
            labels: genreLabels,
            datasets: [{
                label: 'Oblíbený Jezdec',
                data: genreCounts,
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1 // Display only whole numbers
                }
            }
        }
    });
    
    const frequencyCtx = document.getElementById('frequencyChart').getContext('2d');
    new Chart(frequencyCtx, {
        type: 'bar',
        data: {
            labels: frequencyLabels,
            datasets: [{
                label: 'Způsob Sledování',
                data: frequencyCounts,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderWidth: 1
                
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1 // Display only whole numbers
                }
            }
        }
    });
});
