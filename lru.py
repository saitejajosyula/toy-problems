class lru:

    def __init__(self, size):
        self.size = size
        self.data = []
        self.cache = {}

    def put(self, key):

        if len(self.data) < self.size:
            if key in self.data:
                self.data.remove(key)
                self.data.append(key)
                self.cache[key] = "www."+str(key)+".com"
            else:
                self.data.append(key)
                self.cache[key] = "www."+str(key)+".com"
        else:
            # if key in self.data:
            #     self.data.remove(key)
            #     self.data.append(key)
            #     self.cache[key] = "www."+str(key)+".com"
            # else:
            var = self.data[0]
            self.data.pop(0)
            del self.cache[var]
            self.data.append(key)
            self.cache[key] = "www."+str(key)+".com"
     
    def get(self, key, default=None):

        if key in self.cache:
            return self.cache[key]
        else:
            return default

    def get_cache(self):

        b = []
        for i in reversed(self.data):
            b.append(i+" : "+self.cache[i])
        return b
