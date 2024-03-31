const container = document.getElementById('container');
const layoutSelect = document.getElementById('layoutSelect');
const flexDirectionSelect = document.getElementById('flexDirectionSelect');
const justifyContentSelect = document.getElementById('justifyContentSelect');

layoutSelect.addEventListener('change', updateLayout);
flexDirectionSelect.addEventListener('change', updateLayout);
justifyContentSelect.addEventListener('change', updateLayout);

function updateLayout() {
    const selectedLayout = layoutSelect.value;
    const selectedFlexDirection = flexDirectionSelect.value;
    const selectedJustifyContent = justifyContentSelect.value;

    container.style.display = selectedLayout === 'flex' ? 'flex' : 'grid';

    if (selectedLayout === 'flex') {
        container.style.flexDirection = selectedFlexDirection;
        container.style.justifyContent = selectedJustifyContent;
    } else if (selectedLayout === 'grid') {
        container.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    }
}


