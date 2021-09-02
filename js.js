function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
      key = event.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\x08|.|%|'/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  function lerCodigo(codigo) {
    if (!/^[0-9]{5}00[1-3][1-2]$/.test(codigo)) {
      alert("Código inválido!");
      return null;
    }
    const match =
      /(?<modelo>[0-9]{3})(?<lote>[0-9]{2})(?<cor>00[1-3])(?<voltagem>[1-2])/.exec(
        codigo
      );
    console.log(match);
    let dados = {};
    // dados.modelo = codigo.substring(0, 3);
    // dados.lote = codigo.substring(3, 5);
    // const cor = codigo.substring(5, 8);
    dados.modelo = match.groups.modelo;
    dados.lote = match.groups.lote;

    switch (match.groups.cor) {
      case "001":
        dados.cor = "Vermelho";
        break;
      case "002":
        dados.cor = "Preto";
        break;
      case "003":
        dados.cor = "Amarelo";
        break;
    }
    //const voltagem = codigo.substring(8, 9);
    switch (match.groups.voltagem) {
      case "1":
        dados.voltagem = "110v";
        break;
      case "2":
        dados.voltagem = "220v";
        break;
    }
    document.getElementById("tabelaCorpo").innerHTML += `<tr>
                <td>${codigo}</td>
                <td>${dados.modelo}</td>
                <td>${dados.lote}</td>
                <td>${dados.cor}</td>
                <td>${dados.voltagem}</td>
            </tr>`;
  }