var UserListComponent = Vue.extend({
  data: () => {
    return {
      contacts: [
        { user: 'lit0m' },
        { user: 's0lid' }
      ]
    }
  },
  template: `
  <ul class="chat-list-wrapper">
    <li v-for="contact in contacts" class='chat-list-item-container'>
      {{ contact.user }}
    </li>
  </ul>
  `
})

var ChatComponent = Vue.extend({
  data: () => {
    return {
      messages: [
        { user: "lit0m", msg: 'Hello', isOwn: false },
        { user: "splitty", msg: 'World', isOwn: true }
      ]
    }
  },
  template: `
  <div v-for="message in messages">
    <div v-if="!message.isOwn" class="chat-bubble chat-other">
      <div class="chat-bubble-inner">\
        <span class="chat-user">
          {{ message.user }}
        </span>
        <span class="chat-text">
          {{ message.msg }}
        </span>
      </div>
    </div>
    <div v-else class="chat-bubble chat-self">
      <div class="chat-bubble-inner">
        <span class="chat-user">
          {{ message.user }}
        </span>
        <span class="chat-text">
          {{ message.msg }}
        </span>
      </div>
    </div>
  </div>`
})

Vue.component('im-user-list-component', UserListComponent)
Vue.component('im-chat-component', ChatComponent)

new Vue({
  el: '.chat-container'
})
