// function bodyLock

export const useBodyLock = (isActive: boolean) => {
  if (isActive) {
    document.body.classList.add("-locked")
  } else {
    document.body.classList.remove("-locked")
  }
}
