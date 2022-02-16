/*
 * Написать класс ApiService
 * - BASE_URL - публичное поле
 * - #perPage - количество юзеров на страничке - изначально 5
 * - #startUserId - стартовый айди юзера, изначально 0
 * - #name - имя для поиска - изначально пустая строка
 * - должно быть два метода:
 *   1) fetchUsersList - фетчит список юзеров с начального айди, пересчитывает начальный айди по последнему юзеру из результатов и возвращает результат
 *   2) fetchUser - фетчит юзера по имени и возвращает результат
 * - можно дописать методы по сбросу начального айди и пересчету начального айди
 * - написать сеттер для поля количество юзеров на страничке - perPage
 * - написать сеттер для поля имя юзера - name
 * Сразу создать экземпляр и экспортить его
 */

class ApiService {

    static BASE_URL = 'https://api.github.com';
    #userName = '';
    #per_page = 5;
    userId = 0;


    getUsersList() {
        const params = new URLSearchParams({
            since: this.userId,
            per_page: this.per_page,
        });
        return fetch(`${ApiServise.BASE_URL}/users?${params}`).then(res => {
            if (res.status === 404) {
                return Promise.reject(new Error('Not found'));
            }
            return res.json();
        }).then(users => {
            this.userId = users.at(-1).id;
            return users;
        })
    }

    getUserByName() {

        return fetch(`${ApiServise.BASE_URL}/users/${this.#userName}`).then(res => {
        if (res.status === 404) {
        return Promise.reject(new Error('Not found'));
        }
        return res.json();
        });
    }
    
    set userName(value) {
        this.#userName = value;
    }
    set perPage(value) {
        this.#per_page = value;
    }

    resetUserId() {
        userId = 0;
    }
}

const api = new ApiService();

export default api;
