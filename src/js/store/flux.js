const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			addContact: async (name, address, phone, email) => {
				// do fetch request, add contact to store with setStore

				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						"full_name": name,
						"email": email,
						"agenda_slug": "something",
						"address": address,
						"phone": phone,
					}),
					headers: {
						"Content-Type": "application/json",
					}
				})
				let data = response.json()
			},
			getContacts: async () => {
                const store = getStore()
                let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/something")
                let data = await response.json()
                console.log(data)
                setStore({
                    contacts: data
                })
            },
			UpdateContact: async (name, address, phone, email, contactID) => {
				// do fetch request, add contact to store with setStore

				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + contactID, {
					method: "PUT",
					body: JSON.stringify({
						"full_name": name,
						"email": email,
						"agenda_slug": "something",
						"address": address,
						"phone": phone,
					}),
					headers: {
						"Content-Type": "application/json",
					}
				})
				let data = await response.json()
			},
			deleteContact: async (contactID) => {
				let store = getStore()
				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + contactID, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				})
				let data = await response.json()
				setStore({
					contacts: store.contacts.filter((contact) => contact.id !== contactID)
				})
				window.location.reload()
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;