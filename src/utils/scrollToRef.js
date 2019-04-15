// Scrolls to provided ref element with offset

function scrollToRef(ref, offset) {
  window.scrollTo({
    top: ref.current.offsetTop - offset,
    left: 0,
    behavior: 'smooth'
  });
}

export default scrollToRef;
