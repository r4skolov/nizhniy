function addFile() {
    const fileInput = document.getElementById('file-input');
    const preview = document.querySelector('.preview');

    fileInput.addEventListener('change', () => {
        const files = fileInput.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (!file.type.startsWith('image/')) {
                continue;
            }

            const reader = new FileReader();

            reader.addEventListener('load', () => {
                const img = document.createElement('img');
                img.src = reader.result;

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete');

                deleteButton.addEventListener('click', () => {
                    img.remove();
                    deleteButton.remove();
                });

                const previewItem = document.createElement('div');
                previewItem.classList.add('preview-item')
                previewItem.appendChild(img);
                previewItem.appendChild(deleteButton);

                preview.appendChild(previewItem);
            });

            reader.readAsDataURL(file);
        }
        fileInput.value = '';
    });
}

addFile();