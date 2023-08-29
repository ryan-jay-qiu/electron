const func = async () => {
  const response = await window.versions.ping()
  alert(response) // 打印 'pong'
}

func()