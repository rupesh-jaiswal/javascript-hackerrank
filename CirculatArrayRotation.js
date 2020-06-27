function circularArrayRotation(a, k, queries) {
    const actualRotation = k%a.length;
    
        return queries.map((index) =>  {
            const actualIndex = index-actualRotation;
            if(actualIndex<0) {
                return a[a.length+actualIndex];
            }
            return a[actualIndex];
        })
    
    }