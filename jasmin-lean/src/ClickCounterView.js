const ClickCounterView = (clickCounter, updateEl, triggerEl) => {

    if (!clickCounter) throw Error('ClickCounter is null');
    if (!updateEl) throw Error('updateEl is null');
    if (!triggerEl) throw Error('triggerEl is null');

    const view = {
        updateView(value){
            updateEl.innerHTML = value;
        },
        getValueAndUpdateView(){
            const value = clickCounter.increase().getValue() || 0;
            this.updateView(value);
        }
    }

    triggerEl.addEventListener('click', () => {
        view.getValueAndUpdateView();
    })

    return view;
}