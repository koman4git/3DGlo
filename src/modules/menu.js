const menu = () => {
    const menu = document.querySelector('menu')
    
    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }
    const toggleMenu = (e) => {
        if (menu.classList.contains('active-menu')){
            if (!e.target.closest('.menu')) {
                handleMenu()
            } else if (e.target.closest('.menu') && e.target.closest('ul > li > a')) {
                handleMenu()
            } else if (e.target.classList.contains('close-btn')) {
                e.preventDefault()
                handleMenu()
            }
        } else if (e.target.closest('.menu')) {
            handleMenu()
        }
    }
    document.body.addEventListener('click', toggleMenu)

}
export default menu;