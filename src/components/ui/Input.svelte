<script>
    
    export let type = "text";
    export let placeholder = "";
    export let value;
  </script>
  
  <div class="input-field">
    
    <input
      type={type}
      placeholder={placeholder}
      bind:value={value}
      required
    />
  </div>
  
  <style>
    .input-field {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
    }
    /*label {
      margin-bottom: 0.5rem;
      font-weight: bold;
    }*/
    input {
      padding: 0.8rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }
    input:focus {
      outline: none;
      border-color: #0077ff;
      box-shadow: 0 0 5px rgba(0, 119, 255, 0.5);
    }
  </style>