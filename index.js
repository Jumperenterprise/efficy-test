
const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const Module = class {
    constructor(data) {
        this.data = data;
    }
    start() {
          const select = document.querySelector("select[name='status']");
      for (const element of this.data) {
         const opt = document.createElement("option");
         opt.value= element.K_OPPO_STATUS;
         opt.innerHTML =element.STATUS;
         select.appendChild(opt); 
      }
      select.addEventListener("change", () => {
          const index = document.querySelector("select[name='status']").value;
        const value = this.data.find(item => item.K_OPPO_STATUS === Number(index)).SUCCESS;
          document.querySelector("input[name='success']").value = value;
      });
          const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
              e.preventDefault();
              const output = document.querySelector(".output");
        output.innerHTML = JSON.stringify({
            "status": document.querySelector("select[name='status']").value,
            "success": document.querySelector("input[name='success']").value
        });
      });
    }
  }
  
  const module = new Module(oppoStatus);
  module.start();