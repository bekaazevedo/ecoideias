// Carregar ideias salvas ao iniciar
window.onload = function () {
    var savedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    var ideaList = document.getElementById("ideaList");
  
    savedIdeas.forEach(function (idea) {
      addIdeaToList(idea);
    });
  };
  
  // Adicionar ideia
  document.getElementById("addIdeaBtn").addEventListener("click", function () {
    var ideaInput = document.getElementById("ideaInput");
    var ideaText = ideaInput.value.trim();
  
    if (ideaText === "") {
      alert("Por favor, digite uma ideia!");
      return;
    }
  
    addIdeaToList(ideaText);
    saveIdea(ideaText);
  
    ideaInput.value = "";
  });
  
  // Função para adicionar ideia na lista
  function addIdeaToList(ideaText) {
    var ideaList = document.getElementById("ideaList");
    var newItem = document.createElement("li");
    newItem.textContent = ideaText;
  
    // Criar botão de excluir
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
      ideaList.removeChild(newItem);
      removeIdea(ideaText);
    };
  
    newItem.appendChild(deleteBtn);
    ideaList.appendChild(newItem);
  }
  
  // Salvar ideia no localStorage
  function saveIdea(ideaText) {
    var ideas = JSON.parse(localStorage.getItem("ideas")) || [];
    ideas.push(ideaText);
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }
  
  // Remover ideia do localStorage
  function removeIdea(ideaText) {
    var ideas = JSON.parse(localStorage.getItem("ideas")) || [];
    var index = ideas.indexOf(ideaText);
    if (index > -1) {
      ideas.splice(index, 1);
      localStorage.setItem("ideas", JSON.stringify(ideas));
    }
  }
  
  
